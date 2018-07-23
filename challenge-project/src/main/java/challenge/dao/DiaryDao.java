package challenge.dao;

import java.util.List;

import challenge.domain.BodyInfo;

public interface DiaryDao {
    int delete(int no);
    List<BodyInfo> selectList();
    int insert(BodyInfo diary);
    int update(BodyInfo diary);
    BodyInfo selectOne(int no);

}
