package bitcamp.java106.pms;

import bitcamp.java106.pms.server.ServerRequest;

public class Test {
    
    public static void main(String[] args) {
        String str = "/board/add?title=aaaa&content=bbb";
        
        ServerRequest request = new ServerRequest(str);
        
        System.out.println(request.getServerPath());
        System.out.println(request.getParameter("age"));
        System.out.println("김소영22");
        

    }

}
