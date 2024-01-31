package kr.co.wizian.react.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface MainMapper {

	String getUserPassword(String userId);
}
