package challenge.web.json;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import challenge.domain.Diary;
import challenge.service.DiaryService;

@RestController
@RequestMapping("/diary")
public class DiaryController {

    DiaryService diaryService;

    public DiaryController(DiaryService diaryService) {
        this.diaryService = diaryService;
    }
        
    @RequestMapping("pList/{trnno}")
    public Object list (@PathVariable int trnno){
        return diaryService.list(trnno);
    }
    
    @RequestMapping("list/{pno}")
    public Object diaryList (@PathVariable int pno){
        return diaryService.getDiaryList(pno);
    }
    
    @RequestMapping("add")
    public String add(Diary diary) throws Exception {
        diaryService.add(diary);
        return "diary add success!";

    }
    @RequestMapping("{plno}")
    public Object view(@PathVariable int plno) throws Exception {
        return diaryService.get(plno);
    }    
    
    @RequestMapping("update")
    public String update(Diary diary) throws Exception {
        diaryService.update(diary);
        return "diary update success!";
    }
    
}

//ver 55 - JSON 데이터를 출력하는 페이지 컨트롤러 생성






