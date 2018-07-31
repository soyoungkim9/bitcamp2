package challenge.web.json;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import challenge.domain.Member;
import challenge.domain.ProgramMember;
import challenge.service.ProgramMemberService;

@RestController
@RequestMapping("/programMember")
public class ProgramMemberController {

    ProgramMemberService programMemberService;

    public ProgramMemberController(ProgramMemberService programMemberService) {
        this.programMemberService = programMemberService;
    }
    
    @RequestMapping("pList/{trnNo}")
    public List<ProgramMember> listWithPname(@PathVariable int trnNo) throws Exception {
        return programMemberService.listWithPname(trnNo);
    }
    
    @RequestMapping("list/{trnNo}")
    public List<ProgramMember> list(@PathVariable int trnNo) throws Exception {
        return programMemberService.list(trnNo);
    }
    
    @RequestMapping("list/{pno}/{trnNo}")
    public List<ProgramMember> list(@PathVariable int pno,
            @PathVariable int trnNo) throws Exception {
        return programMemberService.list(pno, trnNo);
    }
    
    @RequestMapping("{pno}/{userNo}")
    public List<ProgramMember> view(
            @PathVariable int pno,
            @PathVariable int userNo) throws Exception {
        return programMemberService.get(pno, userNo);
    }
    
    @RequestMapping("{userNo}")
    public Member listWithUserNo(
            @PathVariable int userNo) throws Exception {
        return programMemberService.getWithUserNo(userNo);
    }
   
}

//ver 55 - JSON 데이터를 출력하는 페이지 컨트롤러 생성






