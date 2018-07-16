// 업무로직 구현체 - 고객사 마다 다른 구현을 할 수 있다.
package challenge.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import challenge.dao.UserDao;
import challenge.domain.User;
import challenge.service.UserService;

@Service
public class UserServiceImpl implements UserService {
    
    UserDao userDao;
    
    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }
    
    @Override
    public List<User> list(int pageNo, int pageSize) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("startRowNo", (pageNo - 1) * pageSize);
        params.put("pageSize", pageSize);
        
        return userDao.selectList(params);
    }
    
    @Override
    public User get(String email) {
        return userDao.selectOne(email);
    }
    
    @Override
    public boolean isExist(String email, String password) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("email", email);
        params.put("password", password);
        
        return userDao.count(params) > 0 ? true : false;
    }
    
    @Override
    public int add(User user) {
        return userDao.insert(user);
    }
    
    @Override
    public int update(User user) {
        return userDao.update(user);
    }
    
    @Override
    public int delete(String email) {
        return userDao.delete(email);
    }
}

//ver 53 - 클래스 추가






