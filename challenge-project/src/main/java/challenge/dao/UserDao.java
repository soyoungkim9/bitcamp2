package challenge.dao;

import java.util.List;
import java.util.Map;

import challenge.domain.User;

public interface UserDao {
    int delete(String email);
    List<User> selectList(Map<String,Object> params);
    int insert(User user);
    int update(User user);
    User selectOne(String email);
    User selectOneWithPassword(Map<String,Object> params);
    int count(Map<String,Object> params);
}

