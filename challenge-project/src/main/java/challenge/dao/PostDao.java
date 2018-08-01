package challenge.dao;

import java.util.HashMap;
import java.util.List;

import challenge.domain.Post;

public interface PostDao {
    int delete(int no);
    List<Post> selectList();
    int insert(Post post);
//    int update(String content, int no);
    Post selectOne(int no);
    void update(HashMap<String, Object> paramsPost);
}
