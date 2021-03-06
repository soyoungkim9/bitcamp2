package challenge.dao;

import java.util.List;
import java.util.Map;

import challenge.domain.User;

public interface UserDao {
    int delete(int userNo);
    List<User> selectList();
    int insert(User user);
    int update(User user);
    int update2(User user);
    int update3(User user);
    int updateNotimg(User user);
    User selectOne(int userNo);
    User selectOneWithId(String email);
    User selectOneWithIdTrainer(String id);
    User selectOneWithPassword(Map<String,Object> params);
    int count(Map<String,Object> params);
    User getEmail(String user);
    int userTypeChecker(Map<String,Object> params);
}
