package challenge.dao;

import java.util.List;

import challenge.domain.Member;
import challenge.domain.Post;

public interface MemberDao {

        int delete(int no);
        List<Post> selectList();
        int insert(Member member);
        int update(Member member);
        Post selectOne(int no);
        

}
