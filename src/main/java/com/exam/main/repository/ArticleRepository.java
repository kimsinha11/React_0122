package com.exam.main.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.exam.main.dto.Article;

@Repository
public class ArticleRepository {
       @Autowired
    private JdbcTemplate jdbcTemplate;

    // Article 테이블에서 모든 데이터를 가져오는 메서드
    public List<Article> getAllArticles() {
        String query = "SELECT * FROM article";
        return jdbcTemplate.query(query, (rs, rowNum) -> {
            Article article = new Article();
            article.setArticleId(rs.getInt("articleId"));
            article.setTitle(rs.getString("title"));
            article.setBody(rs.getString("body"));
            article.setRegDate(rs.getDate("regdate"));
            article.setUpdateDate(rs.getDate("updatedate"));
            return article;
        });
    }
}
