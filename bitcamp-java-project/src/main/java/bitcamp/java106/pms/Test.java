package bitcamp.java106.pms;

import bitcamp.java106.pms.server.ServerRequest;

public class Test {
    
    public static void main(String[] args) {
        // 프로그램을 짜다 보면 특정 API를 사용할 때가 있다.
        // 그 API를 적용하기 전에 간단한 예제를 만들어 동작을 확인하라!
        String str = "/board/add?title=aaaa&content=bbb";
        
        ServerRequest request = new ServerRequest(str);
        
        System.out.println(request.getServerPath());
        System.out.println("박수현 천재");
        System.out.println(request.getParameter("title"));
        System.out.println("문선민 천재");
        System.out.println(request.getParameter("content"));
        System.out.println("오현주 천재");
        System.out.println(request.getParameter("age"));
        System.out.println("차진호 천재");
        System.out.println("부천청룡 홍정호 ");
        System.out.println("김소영 천재");
        
        
        System.out.println("♡♡♡♡♡♡♡♡");
        System.out.println("오현주!!!!!!!!");
        
        System.out.println("♡♡♡♡♡♡♡♡");
        System.out.println("박수현!!!!!!!!");
        
        System.out.println("♡♡♡♡♡♡♡♡");
        System.out.println("김소영!!!!!!!!");
    }

}
