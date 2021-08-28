import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { kakaoLogInRequestAction } from '../../../reducers/user';

const KakaoAuth = () => {
  const code = new URL(window.location.href).searchParams.get("code")
  console.log(code)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(kakaoLogInRequestAction(code))
  },[])
  return (
    <div>
      로딩중 ..
    </div>
  );
};

export default KakaoAuth;