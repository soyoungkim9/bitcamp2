-- 회원
DROP TABLE IF EXISTS MEMB RESTRICT;

-- 타임라인
DROP TABLE IF EXISTS TML RESTRICT;

-- 프로그램
DROP TABLE IF EXISTS PROG RESTRICT;

-- 트레이너
DROP TABLE IF EXISTS TRN RESTRICT;

-- 프로그램참여자
DROP TABLE IF EXISTS PMEMB RESTRICT;

-- 회원바디정보
DROP TABLE IF EXISTS BINFO RESTRICT;

-- 메시지
DROP TABLE IF EXISTS MSG RESTRICT;

-- 커뮤니티-게시물
DROP TABLE IF EXISTS CMU RESTRICT;

-- 운동계획서
DROP TABLE IF EXISTS PLAN RESTRICT;

-- 댓글
DROP TABLE IF EXISTS CMT RESTRICT;

-- 운동일지
DROP TABLE IF EXISTS DIARY RESTRICT;

-- 챌린지
DROP TABLE IF EXISTS CHAL RESTRICT;

-- 프로그램미디어
DROP TABLE IF EXISTS PMED RESTRICT;

-- 게시물미디어
DROP TABLE IF EXISTS CMED RESTRICT;

-- 사용자
DROP TABLE IF EXISTS USER RESTRICT;

-- 마일리지
DROP TABLE IF EXISTS MILE RESTRICT;

-- 팔로윙
DROP TABLE IF EXISTS FOLLOW RESTRICT;

-- 프로그램타임라인좋아요
DROP TABLE IF EXISTS TML_LK RESTRICT;

-- 게시글
DROP TABLE IF EXISTS POST RESTRICT;

-- 회원
CREATE TABLE MEMB (
    UNO INTEGER NOT NULL COMMENT '회원번호' -- 회원번호
)
COMMENT '회원';

-- 회원
ALTER TABLE MEMB
    ADD CONSTRAINT PK_MEMB -- 회원 기본키
        PRIMARY KEY (
            UNO -- 회원번호
        );

ALTER TABLE MEMB
    MODIFY COLUMN UNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '회원번호';

-- 타임라인
CREATE TABLE TML (
    TMLNO   INTEGER      NOT NULL COMMENT '타임라인 번호', -- 타임라인 번호
    PNO     INTEGER      NOT NULL COMMENT '프로그램번호', -- 프로그램번호
    UNO     INTEGER      NOT NULL COMMENT '회원번호', -- 회원번호
    TMLPATH VARCHAR(255) NULL     COMMENT '사진' -- 사진
)
COMMENT '타임라인';

-- 타임라인
ALTER TABLE TML
    ADD CONSTRAINT PK_TML -- 타임라인 기본키
        PRIMARY KEY (
            TMLNO -- 타임라인 번호
        );

ALTER TABLE TML
    MODIFY COLUMN TMLNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '타임라인 번호';

-- 프로그램
CREATE TABLE PROG (
    PNO      INTEGER      NOT NULL COMMENT '프로그램번호', -- 프로그램번호
    CNO      INTEGER      NOT NULL COMMENT '챌린지번호', -- 챌린지번호
    PSTNO    CHAR(5)      NOT NULL COMMENT '우편번호', -- 우편번호
    BAS_ADDR VARCHAR(100) NOT NULL COMMENT '기본주소', -- 기본주소
    DET_ADDR VARCHAR(100) NOT NULL COMMENT '상세주소', -- 상세주소
    SDT      DATE         NOT NULL COMMENT '시작일', -- 시작일
    EDT      DATE         NOT NULL COMMENT '종료일', -- 종료일
    PNAME    VARCHAR(50)  NOT NULL COMMENT '프로그램명', -- 프로그램명
    MINQTY   INTEGER      NOT NULL COMMENT '최소인원', -- 최소인원
    MAXQTY   INTEGER      NOT NULL COMMENT '최대인원', -- 최대인원
    PPRICE   INTEGER      NOT NULL COMMENT '가격', -- 가격
    PDESC    TEXT         NOT NULL COMMENT '프로그램설명', -- 프로그램설명
    PTYPE    VARCHAR(50)  NOT NULL COMMENT '프로그램종목', -- 프로그램종목
    PGOAL    VARCHAR(255) NOT NULL COMMENT '프로그램목표', -- 프로그램목표
    PGOAL_N  DOUBLE       NOT NULL COMMENT '프로그램목표수치', -- 프로그램목표수치
    PTH      INTEGER      NOT NULL COMMENT '프로그램기수', -- 프로그램기수
    PTOVER   INTEGER      NOT NULL COMMENT '프로그램회차', -- 프로그램회차
    PDAY     DATE         NOT NULL COMMENT '프로그램수업요일', -- 프로그램수업요일
    PTIME    DATETIME     NOT NULL COMMENT '프로그램수업시간', -- 프로그램수업시간
    PSTATE   INTEGER      NOT NULL COMMENT '진행상태', -- 진행상태
    PRESULT  VARCHAR(255) NOT NULL COMMENT '진행상태내용', -- 진행상태내용
    PLNO     INTEGER      NOT NULL COMMENT '운동계획서번호', -- 운동계획서번호
    TRNNO    INTEGER      NOT NULL COMMENT '트레이너번호' -- 트레이너번호
)
COMMENT '프로그램';

-- 프로그램
ALTER TABLE PROG
    ADD CONSTRAINT PK_PROG -- 프로그램 기본키
        PRIMARY KEY (
            PNO -- 프로그램번호
        );

ALTER TABLE PROG
    MODIFY COLUMN PNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '프로그램번호';

-- 트레이너
CREATE TABLE TRN (
    TRNNO   INTEGER      NOT NULL COMMENT '트레이너번호', -- 트레이너번호
    TRNINT  TEXT         NOT NULL COMMENT '자기소개', -- 자기소개
    TRNCAR  TEXT         NOT NULL COMMENT '경력사항', -- 경력사항
    TRNTIME DATETIME     NOT NULL COMMENT '상담시간', -- 상담시간
    TRNPROG VARCHAR(255) NULL     COMMENT '프로그램', -- 프로그램
    TRNACNT VARCHAR(20)  NOT NULL COMMENT '계좌번호', -- 계좌번호
    TRNBANK VARCHAR(50)  NOT NULL COMMENT '은행명', -- 은행명
    TRNCOIN INTEGER      NOT NULL COMMENT '수익금' -- 수익금
)
COMMENT '트레이너';

-- 트레이너
ALTER TABLE TRN
    ADD CONSTRAINT PK_TRN -- 트레이너 기본키
        PRIMARY KEY (
            TRNNO -- 트레이너번호
        );

-- 트레이너 유니크 인덱스
CREATE UNIQUE INDEX UIX_TRN
    ON TRN ( -- 트레이너
        TRNACNT ASC, -- 계좌번호
        TRNBANK ASC  -- 은행명
    );

ALTER TABLE TRN
    MODIFY COLUMN TRNNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '트레이너번호';

-- 프로그램참여자
CREATE TABLE PMEMB (
    PNO    INTEGER      NOT NULL COMMENT '프로그램번호', -- 프로그램번호
    UNO    INTEGER      NOT NULL COMMENT '회원번호', -- 회원번호
    PAYDAY DATE         NOT NULL COMMENT '결제일', -- 결제일
    REBANK VARCHAR(50)  NOT NULL COMMENT '환불은행명', -- 환불은행명
    REACNT VARCHAR(20)  NOT NULL COMMENT '환불계좌번호', -- 환불계좌번호
    PGRADE DOUBLE       NULL     COMMENT '평점', -- 평점
    PRV    VARCHAR(255) NULL     COMMENT '리뷰', -- 리뷰
    PRVDT  DATE         NULL     COMMENT '리뷰일자', -- 리뷰일자
    PMTYPE INTEGER      NOT NULL COMMENT '유형' -- 유형
)
COMMENT '프로그램참여자';

-- 프로그램참여자
ALTER TABLE PMEMB
    ADD CONSTRAINT PK_PMEMB -- 프로그램참여자 기본키
        PRIMARY KEY (
            PNO, -- 프로그램번호
            UNO  -- 회원번호
        );

-- 회원바디정보
CREATE TABLE BINFO (
    BNO    INTEGER NOT NULL COMMENT '회원바디정보번호', -- 회원바디정보번호
    UNO    INTEGER NOT NULL COMMENT '회원번호', -- 회원번호
    BDATE  DATE    NULL     COMMENT '측정일', -- 측정일
    WEIGHT DOUBLE  NULL     COMMENT '몸무게', -- 몸무게
    MUSCLE DOUBLE  NULL     COMMENT '근력량', -- 근력량
    FAT    DOUBLE  NULL     COMMENT '체지방량' -- 체지방량
)
COMMENT '회원바디정보';

-- 회원바디정보
ALTER TABLE BINFO
    ADD CONSTRAINT PK_BINFO -- 회원바디정보 기본키
        PRIMARY KEY (
            BNO -- 회원바디정보번호
        );

ALTER TABLE BINFO
    MODIFY COLUMN BNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '회원바디정보번호';

-- 메시지
CREATE TABLE MSG (
    MSGNO  INTEGER NOT NULL COMMENT '메시지번호', -- 메시지번호
    MSCONT TEXT    NOT NULL COMMENT '내용', -- 내용
    UNO    INTEGER NOT NULL COMMENT '회원번호', -- 회원번호
    TRNNO  INTEGER NOT NULL COMMENT '트레이너번호', -- 트레이너번호
    MSDIR  INTEGER NOT NULL COMMENT '메시지방향', -- 메시지방향
    MSDATE DATE    NOT NULL COMMENT '날짜' -- 날짜
)
COMMENT '메시지';

-- 메시지
ALTER TABLE MSG
    ADD CONSTRAINT PK_MSG -- 메시지 기본키
        PRIMARY KEY (
            MSGNO -- 메시지번호
        );

ALTER TABLE MSG
    MODIFY COLUMN MSGNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '메시지번호';

-- 커뮤니티-게시물
CREATE TABLE CMU (
    CMUNO    INTEGER      NOT NULL COMMENT '커뮤니티 글번호', -- 커뮤니티 글번호
    CMUT     VARCHAR(255) NOT NULL COMMENT '제목', -- 제목
    CMU_CNT  INTEGER      NOT NULL COMMENT '조회수', -- 조회수
    CMU_TYPE VARCHAR(10)  NOT NULL COMMENT '말머리', -- 말머리
    CMU_LK   INTEGER      NULL     COMMENT '좋아요', -- 좋아요
    UNO      INTEGER      NOT NULL COMMENT '사용자번호' -- 사용자번호
)
COMMENT '커뮤니티-게시물';

-- 커뮤니티-게시물
ALTER TABLE CMU
    ADD CONSTRAINT PK_CMU -- 커뮤니티-게시물 기본키
        PRIMARY KEY (
            CMUNO -- 커뮤니티 글번호
        );

ALTER TABLE CMU
    MODIFY COLUMN CMUNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '커뮤니티 글번호';

-- 운동계획서
CREATE TABLE PLAN (
    PLNO    INTEGER      NOT NULL COMMENT '운동계획서번호', -- 운동계획서번호
    PLTOVER INTEGER      NOT NULL COMMENT '운동차수', -- 운동차수
    PLDT    DATE         NOT NULL COMMENT '운동날짜', -- 운동날짜
    PLTITL  VARCHAR(255) NOT NULL COMMENT '운동제목', -- 운동제목
    PLCONT  TEXT         NOT NULL COMMENT '운동내용' -- 운동내용
)
COMMENT '운동계획서';

-- 운동계획서
ALTER TABLE PLAN
    ADD CONSTRAINT PK_PLAN -- 운동계획서 기본키
        PRIMARY KEY (
            PLNO -- 운동계획서번호
        );

ALTER TABLE PLAN
    MODIFY COLUMN PLNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '운동계획서번호';

-- 댓글
CREATE TABLE CMT (
    CMTNO INTEGER NOT NULL COMMENT '댓글 번호', -- 댓글 번호
    TMLNO INTEGER NOT NULL COMMENT '타임라인 번호' -- 타임라인 번호
)
COMMENT '댓글';

-- 댓글
ALTER TABLE CMT
    ADD CONSTRAINT PK_CMT -- 댓글 기본키
        PRIMARY KEY (
            CMTNO -- 댓글 번호
        );

ALTER TABLE CMT
    MODIFY COLUMN CMTNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '댓글 번호';

-- 운동일지
CREATE TABLE DIARY (
    DNO   INTEGER NOT NULL COMMENT '운동일지번호', -- 운동일지번호
    PLNO  INTEGER NOT NULL COMMENT '운동계획서번호', -- 운동계획서번호
    PNO   INTEGER NOT NULL COMMENT '프로그램번호', -- 프로그램번호
    UNO   INTEGER NOT NULL COMMENT '회원번호', -- 회원번호
    DCONT TEXT    NULL     COMMENT '내용', -- 내용
    DCHEK CHAR(1) NOT NULL COMMENT '출석여부' -- 출석여부
)
COMMENT '운동일지';

-- 운동일지
ALTER TABLE DIARY
    ADD CONSTRAINT PK_DIARY -- 운동일지 기본키
        PRIMARY KEY (
            DNO -- 운동일지번호
        );

-- 운동일지 유니크 인덱스
CREATE UNIQUE INDEX UIX_DIARY
    ON DIARY ( -- 운동일지
        PLNO ASC, -- 운동계획서번호
        PNO ASC,  -- 프로그램번호
        UNO ASC   -- 회원번호
    );

ALTER TABLE DIARY
    MODIFY COLUMN DNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '운동일지번호';

-- 챌린지
CREATE TABLE CHAL (
    CHNO   INTEGER      NOT NULL COMMENT '챌린지번호', -- 챌린지번호
    CHTITL VARCHAR(255) NOT NULL COMMENT '챌린지제목', -- 챌린지제목
    CHCONT TEXT         NOT NULL COMMENT '챌린지내용', -- 챌린지내용
    CHPATH VARCHAR(255) NOT NULL COMMENT '챌린지사진' -- 챌린지사진
)
COMMENT '챌린지';

-- 챌린지
ALTER TABLE CHAL
    ADD CONSTRAINT PK_CHAL -- 챌린지 기본키
        PRIMARY KEY (
            CHNO -- 챌린지번호
        );

ALTER TABLE CHAL
    MODIFY COLUMN CHNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '챌린지번호';

-- 프로그램미디어
CREATE TABLE PMED (
    PMEDNO INTEGER      NOT NULL COMMENT '프로그램미디어번호', -- 프로그램미디어번호
    PPATH  VARCHAR(255) NULL     COMMENT '미디어경로', -- 미디어경로
    PMTYPE INTEGER      NULL     COMMENT '타입', -- 타입
    PNO    INTEGER      NOT NULL COMMENT '프로그램번호' -- 프로그램번호
)
COMMENT '프로그램미디어';

-- 프로그램미디어
ALTER TABLE PMED
    ADD CONSTRAINT PK_PMED -- 프로그램미디어 기본키
        PRIMARY KEY (
            PMEDNO -- 프로그램미디어번호
        );

ALTER TABLE PMED
    MODIFY COLUMN PMEDNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '프로그램미디어번호';

-- 게시물미디어
CREATE TABLE CMED (
    CMEDNO INTEGER      NOT NULL COMMENT '게시물사진번호', -- 게시물사진번호
    CPATH  VARCHAR(255) NULL     COMMENT '사진', -- 사진
    CMUNO  INTEGER      NOT NULL COMMENT '커뮤니티 글번호' -- 커뮤니티 글번호
)
COMMENT '게시물미디어';

-- 게시물미디어
ALTER TABLE CMED
    ADD CONSTRAINT PK_CMED -- 게시물미디어 기본키
        PRIMARY KEY (
            CMEDNO -- 게시물사진번호
        );

ALTER TABLE CMED
    MODIFY COLUMN CMEDNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '게시물사진번호';

-- 사용자
CREATE TABLE USER (
    UNO   INTEGER      NOT NULL COMMENT '사용자번호', -- 사용자번호
    UNAME VARCHAR(50)  NOT NULL COMMENT '이름', -- 이름
    SEX   CHAR(1)      NOT NULL COMMENT '성별', -- 성별
    MAIL  VARCHAR(255) NOT NULL COMMENT '이메일', -- 이메일
    PWD   VARCHAR(150) NOT NULL COMMENT '비밀번호', -- 비밀번호
    UPATH VARCHAR(255) NULL     COMMENT '사진', -- 사진
    UPHON VARCHAR(30)  NOT NULL COMMENT '핸드폰번호', -- 핸드폰번호
    UTYPE INTEGER      NOT NULL COMMENT '유형' -- 유형
)
COMMENT '사용자';

-- 사용자
ALTER TABLE USER
    ADD CONSTRAINT PK_USER -- 사용자 기본키
        PRIMARY KEY (
            UNO -- 사용자번호
        );

-- 사용자 유니크 인덱스
CREATE UNIQUE INDEX UIX_USER
    ON USER ( -- 사용자
        MAIL ASC -- 이메일
    );

ALTER TABLE USER
    MODIFY COLUMN UNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '사용자번호';

-- 마일리지
CREATE TABLE MILE (
    MILENO   INTEGER NOT NULL COMMENT '마일리지번호', -- 마일리지번호
    UNO      INTEGER NOT NULL COMMENT '회원번호', -- 회원번호
    MILECNT  INTEGER NOT NULL COMMENT '마일리지', -- 마일리지
    MILESTAT CHAR(1) NOT NULL COMMENT '입출금상태', -- 입출금상태
    MILEDATE DATE    NOT NULL COMMENT '일자' -- 일자
)
COMMENT '마일리지';

-- 마일리지
ALTER TABLE MILE
    ADD CONSTRAINT PK_MILE -- 마일리지 기본키
        PRIMARY KEY (
            MILENO -- 마일리지번호
        );

ALTER TABLE MILE
    MODIFY COLUMN MILENO INTEGER NOT NULL AUTO_INCREMENT COMMENT '마일리지번호';

-- 팔로윙
CREATE TABLE FOLLOW (
    UNO   INTEGER NOT NULL COMMENT '회원번호', -- 회원번호
    TRNNO INTEGER NOT NULL COMMENT '트레이너번호' -- 트레이너번호
)
COMMENT '팔로윙';

-- 팔로윙
ALTER TABLE FOLLOW
    ADD CONSTRAINT PK_FOLLOW -- 팔로윙 기본키
        PRIMARY KEY (
            UNO,   -- 회원번호
            TRNNO  -- 트레이너번호
        );

-- 프로그램타임라인좋아요
CREATE TABLE TML_LK (
    PNO  INTEGER NOT NULL COMMENT '프로그램번호', -- 프로그램번호
    UNO  INTEGER NOT NULL COMMENT '회원번호', -- 회원번호
    PONO INTEGER NOT NULL COMMENT '게시글 번호' -- 게시글 번호
)
COMMENT '프로그램타임라인좋아요';

-- 프로그램타임라인좋아요
ALTER TABLE TML_LK
    ADD CONSTRAINT PK_TML_LK -- 프로그램타임라인좋아요 기본키
        PRIMARY KEY (
            PNO,  -- 프로그램번호
            UNO,  -- 회원번호
            PONO  -- 게시글 번호
        );

-- 게시글
CREATE TABLE POST (
    PONO   INTEGER NOT NULL COMMENT '게시글 번호', -- 게시글 번호
    POCONT TEXT    NOT NULL COMMENT '내용', -- 내용
    PODATE DATE    NOT NULL COMMENT '날짜' -- 날짜
)
COMMENT '게시글';

-- 게시글
ALTER TABLE POST
    ADD CONSTRAINT PK_POST -- 게시글 기본키
        PRIMARY KEY (
            PONO -- 게시글 번호
        );

ALTER TABLE POST
    MODIFY COLUMN PONO INTEGER NOT NULL AUTO_INCREMENT COMMENT '게시글 번호';

-- 회원
ALTER TABLE MEMB
    ADD CONSTRAINT FK_USER_TO_MEMB -- 사용자 -> 회원
        FOREIGN KEY (
            UNO -- 회원번호
        )
        REFERENCES USER ( -- 사용자
            UNO -- 사용자번호
        );

-- 타임라인
ALTER TABLE TML
    ADD CONSTRAINT FK_PMEMB_TO_TML -- 프로그램참여자 -> 타임라인
        FOREIGN KEY (
            PNO, -- 프로그램번호
            UNO  -- 회원번호
        )
        REFERENCES PMEMB ( -- 프로그램참여자
            PNO, -- 프로그램번호
            UNO  -- 회원번호
        );

-- 타임라인
ALTER TABLE TML
    ADD CONSTRAINT FK_POST_TO_TML -- 게시글 -> 타임라인
        FOREIGN KEY (
            TMLNO -- 타임라인 번호
        )
        REFERENCES POST ( -- 게시글
            PONO -- 게시글 번호
        );

-- 프로그램
ALTER TABLE PROG
    ADD CONSTRAINT FK_TRN_TO_PROG -- 트레이너 -> 프로그램
        FOREIGN KEY (
            TRNNO -- 트레이너번호
        )
        REFERENCES TRN ( -- 트레이너
            TRNNO -- 트레이너번호
        );

-- 프로그램
ALTER TABLE PROG
    ADD CONSTRAINT FK_CHAL_TO_PROG -- 챌린지 -> 프로그램
        FOREIGN KEY (
            CNO -- 챌린지번호
        )
        REFERENCES CHAL ( -- 챌린지
            CHNO -- 챌린지번호
        );

-- 프로그램
ALTER TABLE PROG
    ADD CONSTRAINT FK_PLAN_TO_PROG -- 운동계획서 -> 프로그램
        FOREIGN KEY (
            PLNO -- 운동계획서번호
        )
        REFERENCES PLAN ( -- 운동계획서
            PLNO -- 운동계획서번호
        );

-- 트레이너
ALTER TABLE TRN
    ADD CONSTRAINT FK_USER_TO_TRN -- 사용자 -> 트레이너
        FOREIGN KEY (
            TRNNO -- 트레이너번호
        )
        REFERENCES USER ( -- 사용자
            UNO -- 사용자번호
        );

-- 프로그램참여자
ALTER TABLE PMEMB
    ADD CONSTRAINT FK_PROG_TO_PMEMB -- 프로그램 -> 프로그램참여자
        FOREIGN KEY (
            PNO -- 프로그램번호
        )
        REFERENCES PROG ( -- 프로그램
            PNO -- 프로그램번호
        );

-- 프로그램참여자
ALTER TABLE PMEMB
    ADD CONSTRAINT FK_MEMB_TO_PMEMB -- 회원 -> 프로그램참여자
        FOREIGN KEY (
            UNO -- 회원번호
        )
        REFERENCES MEMB ( -- 회원
            UNO -- 회원번호
        );

-- 회원바디정보
ALTER TABLE BINFO
    ADD CONSTRAINT FK_MEMB_TO_BINFO -- 회원 -> 회원바디정보
        FOREIGN KEY (
            UNO -- 회원번호
        )
        REFERENCES MEMB ( -- 회원
            UNO -- 회원번호
        );

-- 메시지
ALTER TABLE MSG
    ADD CONSTRAINT FK_MEMB_TO_MSG -- 회원 -> 메시지
        FOREIGN KEY (
            UNO -- 회원번호
        )
        REFERENCES MEMB ( -- 회원
            UNO -- 회원번호
        );

-- 메시지
ALTER TABLE MSG
    ADD CONSTRAINT FK_TRN_TO_MSG -- 트레이너 -> 메시지
        FOREIGN KEY (
            TRNNO -- 트레이너번호
        )
        REFERENCES TRN ( -- 트레이너
            TRNNO -- 트레이너번호
        );

-- 커뮤니티-게시물
ALTER TABLE CMU
    ADD CONSTRAINT FK_USER_TO_CMU -- 사용자 -> 커뮤니티-게시물
        FOREIGN KEY (
            UNO -- 사용자번호
        )
        REFERENCES USER ( -- 사용자
            UNO -- 사용자번호
        );

-- 커뮤니티-게시물
ALTER TABLE CMU
    ADD CONSTRAINT FK_POST_TO_CMU -- 게시글 -> 커뮤니티-게시물
        FOREIGN KEY (
            CMUNO -- 커뮤니티 글번호
        )
        REFERENCES POST ( -- 게시글
            PONO -- 게시글 번호
        );

-- 댓글
ALTER TABLE CMT
    ADD CONSTRAINT FK_POST_TO_CMT -- 게시글 -> 댓글
        FOREIGN KEY (
            CMTNO -- 댓글 번호
        )
        REFERENCES POST ( -- 게시글
            PONO -- 게시글 번호
        );

-- 댓글
ALTER TABLE CMT
    ADD CONSTRAINT FK_TML_TO_CMT -- 타임라인 -> 댓글
        FOREIGN KEY (
            TMLNO -- 타임라인 번호
        )
        REFERENCES TML ( -- 타임라인
            TMLNO -- 타임라인 번호
        );

-- 운동일지
ALTER TABLE DIARY
    ADD CONSTRAINT FK_PLAN_TO_DIARY -- 운동계획서 -> 운동일지
        FOREIGN KEY (
            PLNO -- 운동계획서번호
        )
        REFERENCES PLAN ( -- 운동계획서
            PLNO -- 운동계획서번호
        );

-- 운동일지
ALTER TABLE DIARY
    ADD CONSTRAINT FK_PMEMB_TO_DIARY -- 프로그램참여자 -> 운동일지
        FOREIGN KEY (
            PNO, -- 프로그램번호
            UNO  -- 회원번호
        )
        REFERENCES PMEMB ( -- 프로그램참여자
            PNO, -- 프로그램번호
            UNO  -- 회원번호
        );

-- 프로그램미디어
ALTER TABLE PMED
    ADD CONSTRAINT FK_PROG_TO_PMED -- 프로그램 -> 프로그램미디어
        FOREIGN KEY (
            PNO -- 프로그램번호
        )
        REFERENCES PROG ( -- 프로그램
            PNO -- 프로그램번호
        );

-- 게시물미디어
ALTER TABLE CMED
    ADD CONSTRAINT FK_CMU_TO_CMED -- 커뮤니티-게시물 -> 게시물미디어
        FOREIGN KEY (
            CMUNO -- 커뮤니티 글번호
        )
        REFERENCES CMU ( -- 커뮤니티-게시물
            CMUNO -- 커뮤니티 글번호
        );

-- 마일리지
ALTER TABLE MILE
    ADD CONSTRAINT FK_MEMB_TO_MILE -- 회원 -> 마일리지
        FOREIGN KEY (
            UNO -- 회원번호
        )
        REFERENCES MEMB ( -- 회원
            UNO -- 회원번호
        );

-- 팔로윙
ALTER TABLE FOLLOW
    ADD CONSTRAINT FK_MEMB_TO_FOLLOW -- 회원 -> 팔로윙
        FOREIGN KEY (
            UNO -- 회원번호
        )
        REFERENCES MEMB ( -- 회원
            UNO -- 회원번호
        );

-- 팔로윙
ALTER TABLE FOLLOW
    ADD CONSTRAINT FK_TRN_TO_FOLLOW -- 트레이너 -> 팔로윙
        FOREIGN KEY (
            TRNNO -- 트레이너번호
        )
        REFERENCES TRN ( -- 트레이너
            TRNNO -- 트레이너번호
        );

-- 프로그램타임라인좋아요
ALTER TABLE TML_LK
    ADD CONSTRAINT FK_PMEMB_TO_TML_LK -- 프로그램참여자 -> 프로그램타임라인좋아요
        FOREIGN KEY (
            PNO, -- 프로그램번호
            UNO  -- 회원번호
        )
        REFERENCES PMEMB ( -- 프로그램참여자
            PNO, -- 프로그램번호
            UNO  -- 회원번호
        );

-- 프로그램타임라인좋아요
ALTER TABLE TML_LK
    ADD CONSTRAINT FK_POST_TO_TML_LK -- 게시글 -> 프로그램타임라인좋아요
        FOREIGN KEY (
            PONO -- 게시글 번호
        )
        REFERENCES POST ( -- 게시글
            PONO -- 게시글 번호
        );