package bitcamp.java106.pms.dao;

import java.util.List;

import bitcamp.java106.pms.domain.Community;

public interface CommunityDao {
    int delete(int no);
    List<Community> selectList();
    int insert(Community community);
    int update(Community community);
    Community selectOne(int no);
}
