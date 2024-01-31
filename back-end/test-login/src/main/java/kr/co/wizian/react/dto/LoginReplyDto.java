package kr.co.wizian.react.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LoginReplyDto {

	String replyCode;
	String message;
}
