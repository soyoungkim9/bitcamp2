package challenge.service;

import java.util.List;

import challenge.domain.Diary;

public interface DiaryService {
    List<Diary> list(int trnno); // 전체 리스트
    List<Object> getDiaryList(int pno); // 운동일지 리스트보기
    int add(Diary diary); // 운동일지 등록
    List<Object> get(int plno); // 해당 회차 일지 선택해서 보기
    int update(Diary diary); // 운동일지 수정
}

