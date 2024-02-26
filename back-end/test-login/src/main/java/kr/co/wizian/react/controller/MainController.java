package kr.co.wizian.react.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import kr.co.wizian.react.dto.LoginReplyDto;
import kr.co.wizian.react.dto.LoginRequestDto;
import kr.co.wizian.react.service.MainService;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class MainController {

    @Autowired
    MainService service;

    @ResponseBody
    @RequestMapping(value="/api/login", method=RequestMethod.POST)
    LoginReplyDto loginUser(@RequestBody LoginRequestDto requestDto) {
        HttpServletRequest req = ((ServletRequestAttributes)RequestContextHolder.currentRequestAttributes()).getRequest();
        String ipAddr = req.getHeader("X-FORWARDED-FOR");
        if (ipAddr == null) {
            ipAddr = req.getRemoteAddr();
        }

        log.info("doLogin() - {}", ipAddr);

        // 처리 요청
        return service.doLogin(requestDto);
    }
}