// 서비스 컴포넌트 - 회원관리 업무를 처리할 객체
package challenge.service;

import java.util.List;

import challenge.domain.User;



public interface UserService {
    // 서비스 컴포넌트에서 메서드명을 지을 때는 
    // 업무 용어를 사용하라!
    List<User> list(int pageNo, int pageSize);
    User get(String email);
    boolean isExist(String email, String password);
    int add(User user);
    int update(User user);
    int delete(String email);
}

//ver 53 - 인터페이스 추가
