package com.exam.main.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Member {
    private int memberId;
    private String memberNm;
    private Date regDate;
    private Date updateDate;
    private String loginId;
    private String loginPw;
}
