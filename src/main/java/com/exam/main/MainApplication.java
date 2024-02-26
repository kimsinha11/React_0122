package com.exam.main;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.exam.main.dto.Article;
import com.exam.main.repository.ArticleRepository;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(basePackages = {"com.exam.main"}) // ArticleRepository를 검색할 패키지를 지정
public class MainApplication {

    @Autowired
    private ArticleRepository articleRepository;

    public static void main(String[] args) {
        SpringApplication.run(MainApplication.class, args);
    }

    // MainApplication이 시작될 때 ArticleRepository를 사용하여 데이터를 가져오는 메서드
    public void fetchDataFromArticleRepository() {
        List<Article> articles = articleRepository.getAllArticles();
        // 가져온 데이터를 처리하는 로직 추가
    }
}
