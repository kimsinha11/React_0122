package com.exam.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.main.dto.Article;
import com.exam.main.repository.ArticleRepository;


@Service
public class ArticleService {
     @Autowired
    private ArticleRepository articleRepository;

    public List<Article> getAllArticles() {
        return articleRepository.getAllArticles();
    }
}
