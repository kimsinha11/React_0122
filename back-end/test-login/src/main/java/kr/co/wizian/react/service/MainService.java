package kr.co.wizian.react.service;

import kr.co.wizian.react.dto.LoginReplyDto;
import kr.co.wizian.react.dto.LoginRequestDto;

public interface MainService {

	LoginReplyDto doLogin(LoginRequestDto request);
}
