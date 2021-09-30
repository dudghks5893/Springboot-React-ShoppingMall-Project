import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { signUpAsync } from '../../../reducers/user';
import Confirm from '../modal/confirm';

type userInfo ={
  email: string,
  username: string,
  password: string,
}

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [checkedPassword, setCheckedPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [confirm, setConfrim]= useState(false);

  const {done}= useSelector((state:RootState)=>state.user.signup)
  

  const onEmail = useCallback((e:any) => {
    setEmail(e.target.value)
  },[])

  const onUserName = useCallback((e:any) => {
    setUserName(e.target.value)
  },[])

  const onPassword = useCallback((e:any) => {
    setPassword(e.target.value)
  },[])

  const onCheckedPassword = useCallback((e:any)=>{
    setCheckedPassword(e.target.value);
    setErrorPassword(e.target.value!==password)
  },[password])


  const dispatch = useDispatch();
  const onSignUp = useCallback((e:any) => {
    e.preventDefault();
    if(email!=='' && username!=='' && errorPassword){
      const userInfo: userInfo = {email, username, password}
      dispatch(signUpAsync.request(userInfo))
      setConfrim(true)
      if(confirm){
        setEmail('')
        setUserName('')
        setPassword('')
      }
    }
    
    
  },[email, username, password])


  return(
    <>
      <div className="sign-contents">
        <div className="sign-zone">
        <form className="sign-feilds" >
          <input type="email" placeholder="이메일" value={email} onChange={onEmail}></input>
          <br />
          <input type="text" placeholder="아이디" value={username} onChange={onUserName}></input>
          <br />
          <input type="password" placeholder="비밀번호" value={password} onChange={onPassword}></input>
          <br />
          <input type="password" value={checkedPassword} placeholder="비밀번호 확인" onChange={onCheckedPassword}></input>
          {errorPassword&&<p>비밀번호가 일치하지 않습니다.</p>}
          <br />
          <button onClick={onSignUp}>확인</button>
          <br />
        </form>
        </div>
      </div>
      { confirm ? <Confirm /> :'' }
    </>
  )
}

export default Signup;

