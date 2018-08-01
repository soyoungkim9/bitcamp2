package challenge.dao;

import java.util.List;

import challenge.domain.Diary;

public interface DiaryDao {
    List<Diary> selectList(int trnno); // 전체 리스트
    List<Object> selectDiaryList(int pno); // 운동일지 보기
    int insert(Diary diary); // 운동일지 등록
    List<Object> selectOne(int plno); // 해당 회차 일지 선택해서 보기
    int update(Diary diary); // 운동일지 수정

}
