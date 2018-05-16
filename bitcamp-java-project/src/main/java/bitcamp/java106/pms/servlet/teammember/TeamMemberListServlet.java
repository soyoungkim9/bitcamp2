// Controller 규칙에 따라 메서드 작성
package bitcamp.java106.pms.servlet.teammember;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bitcamp.java106.pms.dao.TeamDao;
import bitcamp.java106.pms.dao.TeamMemberDao;
import bitcamp.java106.pms.servlet.InitServlet;

@SuppressWarnings("serial")
@WebServlet("/teammember/list")
public class TeamMemberListServlet extends HttpServlet {
    
    TeamDao teamDao;
    TeamMemberDao teamMemberDao;
    
    @Override
    public void init() throws ServletException {
        teamDao = InitServlet.getApplicationContext().getBean(TeamDao.class);
        teamMemberDao = InitServlet.getApplicationContext().getBean(TeamMemberDao.class);
    }
    
    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws ServletException, IOException {
       
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        String teamName = request.getParameter("teamName");
        
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<meta charset='UTF-8'>");
        out.println("<title>팀멤버 목록</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>팀멤버 목록</h1>");
        out.println("<form action='list' method='get'>");
        
        try {
            List<String> list = teamMemberDao.selectList(teamName);
            
            out.println("<p><a href='form.html'>팀회원 추가</a></p>");
            out.println("<table border='1'>");
            out.println("<tr>");
            out.println("    <th colspan='2'>멤버</th>");
            out.println("</tr>");
            
            for (String memberId : list) {
                out.println("<tr>");
                out.printf("    <td>%s</td>"
                        + "<td><a href='delete?teamName=%s&memberId=%s'>삭제</a></td>\n",
                        memberId,
                        teamName,
                        memberId);
                out.println("</tr>");
            }
            out.println();
        } catch (Exception e) {
            out.println("<p>목록 가져오기 실패!</p>");
            e.printStackTrace(out);
        }
        out.println("팀명: <input type='text' name='teamName'><br>");
        out.println("<button>조회</button>");
        out.println("</from>");
        out.println("<p>");
        out.println("</p>");
        out.println("</form>");
        out.println("</body>");
        out.println("</html>");
    }
}

