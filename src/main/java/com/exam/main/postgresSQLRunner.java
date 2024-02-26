// package com.exam.main;

// import java.sql.Connection;
// import java.sql.PreparedStatement;
// import java.sql.ResultSet;
// import java.util.ArrayList;
// import java.util.List;

// import javax.sql.DataSource;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.ApplicationArguments;
// import org.springframework.boot.ApplicationRunner;
// import org.springframework.stereotype.Component;

// import com.exam.main.dto.Article;

// @Component
// public class postgresSQLRunner implements ApplicationRunner {
    
//     @Autowired
//     DataSource dataSource;

//     @Override
//     public void run(ApplicationArguments args) throws Exception {
//         try (Connection connection = dataSource.getConnection()){
//             // Article 테이블 조회
//             List<Article> articles = new ArrayList<>();
//             try (PreparedStatement statement = connection.prepareStatement("SELECT * FROM article");
//                  ResultSet rs = statement.executeQuery()) {
//                 while (rs.next()) {
//                     Article article = new Article();
//                     article.setArticleId(rs.getInt("articleId"));
//                     article.setTitle(rs.getString("title"));
//                     article.setBody(rs.getString("body"));
//                     articles.add(article);
//                 }
//             }

           

//             // 조회 결과 출력
//             System.out.println("Articles:");
//             articles.forEach(System.out::println);

//         }
//     }
// }
