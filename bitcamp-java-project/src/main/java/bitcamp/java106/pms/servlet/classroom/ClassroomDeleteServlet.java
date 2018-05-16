// Controller 규칙에 따라 메서드 작성
package bitcamp.java106.pms.servlet.classroom;

import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

import bitcamp.java106.pms.dao.ClassroomDao;
import bitcamp.java106.pms.server.ServerRequest;
import bitcamp.java106.pms.server.ServerResponse;

@WebServlet("/classroom/delete")
public class ClassroomDeleteServlet extends HttpServlet {
    ClassroomDao classroomDao;
    
    public ClassroomDeleteServlet(ClassroomDao classroomDao) {
        this.classroomDao = classroomDao;
    }
    
    @Override
    public void service(ServerRequest request, ServerResponse response) {
        PrintWriter out = response.getWriter();
        int no = Integer.parseInt(request.getParameter("no"));
        
        try {
            int count = classroomDao.delete(no);
            
            if (count == 0) {
                out.println("유효하지 않은 게시물 번호입니다.");
            } else {
                out.println("삭제하였습니다.");
            }
        } catch (Exception e) {
            out.println("삭제 실패!");
            e.printStackTrace(out);
        }
    }

}

//ver 31 - JDBC API가 적용된 DAO 사용
//ver 28 - 네트워크 버전으로 변경
//ver 26 - ClassroomController에서 delete() 메서드를 추출하여 클래스로 정의.
