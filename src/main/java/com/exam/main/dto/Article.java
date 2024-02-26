package com.exam.main.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Article {
    private int articleId;
    private String title;
    private String body;
    private Date regDate;
    private Date updateDate;
}
