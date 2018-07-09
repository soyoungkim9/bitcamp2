-- ȸ��
DROP TABLE IF EXISTS MEMB RESTRICT;

-- Ÿ�Ӷ���
DROP TABLE IF EXISTS TML RESTRICT;

-- ���α׷�
DROP TABLE IF EXISTS PROG RESTRICT;

-- Ʈ���̳�
DROP TABLE IF EXISTS TRN RESTRICT;

-- ���α׷�������
DROP TABLE IF EXISTS PMEMB RESTRICT;

-- ȸ���ٵ�����
DROP TABLE IF EXISTS BINFO RESTRICT;

-- �޽���
DROP TABLE IF EXISTS MSG RESTRICT;

-- Ŀ�´�Ƽ-�Խù�
DROP TABLE IF EXISTS CMU RESTRICT;

-- ���ȹ��
DROP TABLE IF EXISTS PLAN RESTRICT;

-- ���
DROP TABLE IF EXISTS CMT RESTRICT;

-- �����
DROP TABLE IF EXISTS DIARY RESTRICT;

-- ç����
DROP TABLE IF EXISTS CHAL RESTRICT;

-- ���α׷��̵��
DROP TABLE IF EXISTS PMED RESTRICT;

-- �Խù��̵��
DROP TABLE IF EXISTS CMED RESTRICT;

-- �����
DROP TABLE IF EXISTS USER RESTRICT;

-- ���ϸ���
DROP TABLE IF EXISTS MILE RESTRICT;

-- �ȷ���
DROP TABLE IF EXISTS FOLLOW RESTRICT;

-- ���α׷�Ÿ�Ӷ������ƿ�
DROP TABLE IF EXISTS TML_LK RESTRICT;

-- �Խñ�
DROP TABLE IF EXISTS POST RESTRICT;

-- ȸ��
CREATE TABLE MEMB (
	UNO INTEGER NOT NULL COMMENT 'ȸ����ȣ' -- ȸ����ȣ
)
COMMENT 'ȸ��';

-- ȸ��
ALTER TABLE MEMB
	ADD CONSTRAINT PK_MEMB -- ȸ�� �⺻Ű
		PRIMARY KEY (
			UNO -- ȸ����ȣ
		);

ALTER TABLE MEMB
	MODIFY COLUMN UNO INTEGER NOT NULL AUTO_INCREMENT COMMENT 'ȸ����ȣ';

-- Ÿ�Ӷ���
CREATE TABLE TML (
	TMLNO   INTEGER      NOT NULL COMMENT 'Ÿ�Ӷ��� ��ȣ', -- Ÿ�Ӷ��� ��ȣ
	PNO     INTEGER      NOT NULL COMMENT '���α׷���ȣ', -- ���α׷���ȣ
	UNO     INTEGER      NOT NULL COMMENT 'ȸ����ȣ', -- ȸ����ȣ
	TMLPATH VARCHAR(255) NULL     COMMENT '����' -- ����
)
COMMENT 'Ÿ�Ӷ���';

-- Ÿ�Ӷ���
ALTER TABLE TML
	ADD CONSTRAINT PK_TML -- Ÿ�Ӷ��� �⺻Ű
		PRIMARY KEY (
			TMLNO -- Ÿ�Ӷ��� ��ȣ
		);

ALTER TABLE TML
	MODIFY COLUMN TMLNO INTEGER NOT NULL AUTO_INCREMENT COMMENT 'Ÿ�Ӷ��� ��ȣ';

-- ���α׷�
CREATE TABLE PROG (
	PNO      INTEGER      NOT NULL COMMENT '���α׷���ȣ', -- ���α׷���ȣ
	CNO      INTEGER      NOT NULL COMMENT 'ç������ȣ', -- ç������ȣ
	PSTNO    CHAR(5)      NOT NULL COMMENT '�����ȣ', -- �����ȣ
	BAS_ADDR VARCHAR(100) NOT NULL COMMENT '�⺻�ּ�', -- �⺻�ּ�
	DET_ADDR VARCHAR(100) NOT NULL COMMENT '���ּ�', -- ���ּ�
	SDT      DATE         NOT NULL COMMENT '������', -- ������
	EDT      DATE         NOT NULL COMMENT '������', -- ������
	PNAME    VARCHAR(50)  NOT NULL COMMENT '���α׷���', -- ���α׷���
	MINQTY   INTEGER      NOT NULL COMMENT '�ּ��ο�', -- �ּ��ο�
	MAXQTY   INTEGER      NOT NULL COMMENT '�ִ��ο�', -- �ִ��ο�
	PPRICE   INTEGER      NOT NULL COMMENT '����', -- ����
	PDESC    TEXT         NOT NULL COMMENT '���α׷�����', -- ���α׷�����
	PTYPE    VARCHAR(50)  NOT NULL COMMENT '���α׷�����', -- ���α׷�����
	PGOAL    VARCHAR(255) NOT NULL COMMENT '���α׷���ǥ', -- ���α׷���ǥ
	PGOAL_N  DOUBLE       NOT NULL COMMENT '���α׷���ǥ��ġ', -- ���α׷���ǥ��ġ
	PTH      INTEGER      NOT NULL COMMENT '���α׷����', -- ���α׷����
	PTOVER   INTEGER      NOT NULL COMMENT '���α׷�ȸ��', -- ���α׷�ȸ��
	PDAY     DATE         NOT NULL COMMENT '���α׷���������', -- ���α׷���������
	PTIME    DATETIME     NOT NULL COMMENT '���α׷������ð�', -- ���α׷������ð�
	PSTATE   INTEGER      NOT NULL COMMENT '�������', -- �������
	PRESULT  VARCHAR(255) NOT NULL COMMENT '������³���', -- ������³���
	PLNO     INTEGER      NOT NULL COMMENT '���ȹ����ȣ', -- ���ȹ����ȣ
	TRNNO    INTEGER      NOT NULL COMMENT 'Ʈ���̳ʹ�ȣ' -- Ʈ���̳ʹ�ȣ
)
COMMENT '���α׷�';

-- ���α׷�
ALTER TABLE PROG
	ADD CONSTRAINT PK_PROG -- ���α׷� �⺻Ű
		PRIMARY KEY (
			PNO -- ���α׷���ȣ
		);

ALTER TABLE PROG
	MODIFY COLUMN PNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '���α׷���ȣ';

-- Ʈ���̳�
CREATE TABLE TRN (
	TRNNO   INTEGER      NOT NULL COMMENT 'Ʈ���̳ʹ�ȣ', -- Ʈ���̳ʹ�ȣ
	TRNINT  TEXT         NOT NULL COMMENT '�ڱ�Ұ�', -- �ڱ�Ұ�
	TRNCAR  TEXT         NOT NULL COMMENT '��»���', -- ��»���
	TRNTIME DATETIME     NOT NULL COMMENT '���ð�', -- ���ð�
	TRNPROG VARCHAR(255) NULL     COMMENT '���α׷�', -- ���α׷�
	TRNACNT VARCHAR(20)  NOT NULL COMMENT '���¹�ȣ', -- ���¹�ȣ
	TRNBANK VARCHAR(50)  NOT NULL COMMENT '�����', -- �����
	TRNCOIN INTEGER      NOT NULL COMMENT '���ͱ�' -- ���ͱ�
)
COMMENT 'Ʈ���̳�';

-- Ʈ���̳�
ALTER TABLE TRN
	ADD CONSTRAINT PK_TRN -- Ʈ���̳� �⺻Ű
		PRIMARY KEY (
			TRNNO -- Ʈ���̳ʹ�ȣ
		);

-- Ʈ���̳� ����ũ �ε���
CREATE UNIQUE INDEX UIX_TRN
	ON TRN ( -- Ʈ���̳�
		TRNACNT ASC, -- ���¹�ȣ
		TRNBANK ASC  -- �����
	);

ALTER TABLE TRN
	MODIFY COLUMN TRNNO INTEGER NOT NULL AUTO_INCREMENT COMMENT 'Ʈ���̳ʹ�ȣ';

-- ���α׷�������
CREATE TABLE PMEMB (
	PNO    INTEGER      NOT NULL COMMENT '���α׷���ȣ', -- ���α׷���ȣ
	UNO    INTEGER      NOT NULL COMMENT 'ȸ����ȣ', -- ȸ����ȣ
	PAYDAY DATE         NOT NULL COMMENT '������', -- ������
	REBANK VARCHAR(50)  NOT NULL COMMENT 'ȯ�������', -- ȯ�������
	REACNT VARCHAR(20)  NOT NULL COMMENT 'ȯ�Ұ��¹�ȣ', -- ȯ�Ұ��¹�ȣ
	PGRADE DOUBLE       NULL     COMMENT '����', -- ����
	PRV    VARCHAR(255) NULL     COMMENT '����', -- ����
	PRVDT  DATE         NULL     COMMENT '��������', -- ��������
	PMTYPE INTEGER      NOT NULL COMMENT '����' -- ����
)
COMMENT '���α׷�������';

-- ���α׷�������
ALTER TABLE PMEMB
	ADD CONSTRAINT PK_PMEMB -- ���α׷������� �⺻Ű
		PRIMARY KEY (
			PNO, -- ���α׷���ȣ
			UNO  -- ȸ����ȣ
		);

-- ȸ���ٵ�����
CREATE TABLE BINFO (
	BNO    INTEGER NOT NULL COMMENT 'ȸ���ٵ�������ȣ', -- ȸ���ٵ�������ȣ
	UNO    INTEGER NOT NULL COMMENT 'ȸ����ȣ', -- ȸ����ȣ
	BDATE  DATE    NULL     COMMENT '������', -- ������
	WEIGHT DOUBLE  NULL     COMMENT '������', -- ������
	MUSCLE DOUBLE  NULL     COMMENT '�ٷ·�', -- �ٷ·�
	FAT    DOUBLE  NULL     COMMENT 'ü���淮' -- ü���淮
)
COMMENT 'ȸ���ٵ�����';

-- ȸ���ٵ�����
ALTER TABLE BINFO
	ADD CONSTRAINT PK_BINFO -- ȸ���ٵ����� �⺻Ű
		PRIMARY KEY (
			BNO -- ȸ���ٵ�������ȣ
		);

ALTER TABLE BINFO
	MODIFY COLUMN BNO INTEGER NOT NULL AUTO_INCREMENT COMMENT 'ȸ���ٵ�������ȣ';

-- �޽���
CREATE TABLE MSG (
	MSGNO  INTEGER NOT NULL COMMENT '�޽�����ȣ', -- �޽�����ȣ
	MSCONT TEXT    NOT NULL COMMENT '����', -- ����
	UNO    INTEGER NOT NULL COMMENT 'ȸ����ȣ', -- ȸ����ȣ
	TRNNO  INTEGER NOT NULL COMMENT 'Ʈ���̳ʹ�ȣ', -- Ʈ���̳ʹ�ȣ
	MSDIR  INTEGER NOT NULL COMMENT '�޽�������', -- �޽�������
	MSDATE DATE    NOT NULL COMMENT '��¥' -- ��¥
)
COMMENT '�޽���';

-- �޽���
ALTER TABLE MSG
	ADD CONSTRAINT PK_MSG -- �޽��� �⺻Ű
		PRIMARY KEY (
			MSGNO -- �޽�����ȣ
		);

ALTER TABLE MSG
	MODIFY COLUMN MSGNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '�޽�����ȣ';

-- Ŀ�´�Ƽ-�Խù�
CREATE TABLE CMU (
	CMUNO    INTEGER      NOT NULL COMMENT 'Ŀ�´�Ƽ �۹�ȣ', -- Ŀ�´�Ƽ �۹�ȣ
	CMUT     VARCHAR(255) NOT NULL COMMENT '����', -- ����
	CMU_CNT  INTEGER      NOT NULL COMMENT '��ȸ��', -- ��ȸ��
	CMU_TYPE VARCHAR(10)  NOT NULL COMMENT '���Ӹ�', -- ���Ӹ�
	CMU_LK   INTEGER      NULL     COMMENT '���ƿ�', -- ���ƿ�
	UNO      INTEGER      NOT NULL COMMENT '����ڹ�ȣ' -- ����ڹ�ȣ
)
COMMENT 'Ŀ�´�Ƽ-�Խù�';

-- Ŀ�´�Ƽ-�Խù�
ALTER TABLE CMU
	ADD CONSTRAINT PK_CMU -- Ŀ�´�Ƽ-�Խù� �⺻Ű
		PRIMARY KEY (
			CMUNO -- Ŀ�´�Ƽ �۹�ȣ
		);

ALTER TABLE CMU
	MODIFY COLUMN CMUNO INTEGER NOT NULL AUTO_INCREMENT COMMENT 'Ŀ�´�Ƽ �۹�ȣ';

-- ���ȹ��
CREATE TABLE PLAN (
	PLNO    INTEGER      NOT NULL COMMENT '���ȹ����ȣ', -- ���ȹ����ȣ
	PLTOVER INTEGER      NOT NULL COMMENT '�����', -- �����
	PLDT    DATE         NOT NULL COMMENT '���¥', -- ���¥
	PLTITL  VARCHAR(255) NOT NULL COMMENT '�����', -- �����
	PLCONT  TEXT         NOT NULL COMMENT '�����' -- �����
)
COMMENT '���ȹ��';

-- ���ȹ��
ALTER TABLE PLAN
	ADD CONSTRAINT PK_PLAN -- ���ȹ�� �⺻Ű
		PRIMARY KEY (
			PLNO -- ���ȹ����ȣ
		);

ALTER TABLE PLAN
	MODIFY COLUMN PLNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '���ȹ����ȣ';

-- ���
CREATE TABLE CMT (
	CMTNO INTEGER NOT NULL COMMENT '��� ��ȣ', -- ��� ��ȣ
	TMLNO INTEGER NOT NULL COMMENT 'Ÿ�Ӷ��� ��ȣ' -- Ÿ�Ӷ��� ��ȣ
)
COMMENT '���';

-- ���
ALTER TABLE CMT
	ADD CONSTRAINT PK_CMT -- ��� �⺻Ű
		PRIMARY KEY (
			CMTNO -- ��� ��ȣ
		);

ALTER TABLE CMT
	MODIFY COLUMN CMTNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '��� ��ȣ';

-- �����
CREATE TABLE DIARY (
	DNO   INTEGER NOT NULL COMMENT '�������ȣ', -- �������ȣ
	PLNO  INTEGER NOT NULL COMMENT '���ȹ����ȣ', -- ���ȹ����ȣ
	PNO   INTEGER NOT NULL COMMENT '���α׷���ȣ', -- ���α׷���ȣ
	UNO   INTEGER NOT NULL COMMENT 'ȸ����ȣ', -- ȸ����ȣ
	DCONT TEXT    NULL     COMMENT '����', -- ����
	DCHEK CHAR(1) NOT NULL COMMENT '�⼮����' -- �⼮����
)
COMMENT '�����';

-- �����
ALTER TABLE DIARY
	ADD CONSTRAINT PK_DIARY -- ����� �⺻Ű
		PRIMARY KEY (
			DNO -- �������ȣ
		);

-- ����� ����ũ �ε���
CREATE UNIQUE INDEX UIX_DIARY
	ON DIARY ( -- �����
		PLNO ASC, -- ���ȹ����ȣ
		PNO ASC,  -- ���α׷���ȣ
		UNO ASC   -- ȸ����ȣ
	);

ALTER TABLE DIARY
	MODIFY COLUMN DNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '�������ȣ';

-- ç����
CREATE TABLE CHAL (
	CHNO   INTEGER      NOT NULL COMMENT 'ç������ȣ', -- ç������ȣ
	CHTITL VARCHAR(255) NOT NULL COMMENT 'ç��������', -- ç��������
	CHCONT TEXT         NOT NULL COMMENT 'ç��������', -- ç��������
	CHPATH VARCHAR(255) NOT NULL COMMENT 'ç��������' -- ç��������
)
COMMENT 'ç����';

-- ç����
ALTER TABLE CHAL
	ADD CONSTRAINT PK_CHAL -- ç���� �⺻Ű
		PRIMARY KEY (
			CHNO -- ç������ȣ
		);

ALTER TABLE CHAL
	MODIFY COLUMN CHNO INTEGER NOT NULL AUTO_INCREMENT COMMENT 'ç������ȣ';

-- ���α׷��̵��
CREATE TABLE PMED (
	PMEDNO INTEGER      NOT NULL COMMENT '���α׷��̵���ȣ', -- ���α׷��̵���ȣ
	PPATH  VARCHAR(255) NULL     COMMENT '�̵����', -- �̵����
	PMTYPE INTEGER      NULL     COMMENT 'Ÿ��', -- Ÿ��
	PNO    INTEGER      NOT NULL COMMENT '���α׷���ȣ' -- ���α׷���ȣ
)
COMMENT '���α׷��̵��';

-- ���α׷��̵��
ALTER TABLE PMED
	ADD CONSTRAINT PK_PMED -- ���α׷��̵�� �⺻Ű
		PRIMARY KEY (
			PMEDNO -- ���α׷��̵���ȣ
		);

ALTER TABLE PMED
	MODIFY COLUMN PMEDNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '���α׷��̵���ȣ';

-- �Խù��̵��
CREATE TABLE CMED (
	CMEDNO INTEGER      NOT NULL COMMENT '�Խù�������ȣ', -- �Խù�������ȣ
	CPATH  VARCHAR(255) NULL     COMMENT '����', -- ����
	CMUNO  INTEGER      NOT NULL COMMENT 'Ŀ�´�Ƽ �۹�ȣ' -- Ŀ�´�Ƽ �۹�ȣ
)
COMMENT '�Խù��̵��';

-- �Խù��̵��
ALTER TABLE CMED
	ADD CONSTRAINT PK_CMED -- �Խù��̵�� �⺻Ű
		PRIMARY KEY (
			CMEDNO -- �Խù�������ȣ
		);

ALTER TABLE CMED
	MODIFY COLUMN CMEDNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '�Խù�������ȣ';

-- �����
CREATE TABLE USER (
	UNO   INTEGER      NOT NULL COMMENT '����ڹ�ȣ', -- ����ڹ�ȣ
	UNAME VARCHAR(50)  NOT NULL COMMENT '�̸�', -- �̸�
	SEX   CHAR(1)      NOT NULL COMMENT '����', -- ����
	MAIL  VARCHAR(255) NOT NULL COMMENT '�̸���', -- �̸���
	PWD   VARCHAR(150) NOT NULL COMMENT '��й�ȣ', -- ��й�ȣ
	UPATH VARCHAR(255) NULL     COMMENT '����', -- ����
	UPHON VARCHAR(30)  NOT NULL COMMENT '�ڵ�����ȣ', -- �ڵ�����ȣ
	UTYPE INTEGER      NOT NULL COMMENT '����' -- ����
)
COMMENT '�����';

-- �����
ALTER TABLE USER
	ADD CONSTRAINT PK_USER -- ����� �⺻Ű
		PRIMARY KEY (
			UNO -- ����ڹ�ȣ
		);

-- ����� ����ũ �ε���
CREATE UNIQUE INDEX UIX_USER
	ON USER ( -- �����
		MAIL ASC -- �̸���
	);

ALTER TABLE USER
	MODIFY COLUMN UNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '����ڹ�ȣ';

-- ���ϸ���
CREATE TABLE MILE (
	MILENO   INTEGER NOT NULL COMMENT '���ϸ�����ȣ', -- ���ϸ�����ȣ
	UNO      INTEGER NOT NULL COMMENT 'ȸ����ȣ', -- ȸ����ȣ
	MILECNT  INTEGER NOT NULL COMMENT '���ϸ���', -- ���ϸ���
	MILESTAT CHAR(1) NOT NULL COMMENT '����ݻ���', -- ����ݻ���
	MILEDATE DATE    NOT NULL COMMENT '����' -- ����
)
COMMENT '���ϸ���';

-- ���ϸ���
ALTER TABLE MILE
	ADD CONSTRAINT PK_MILE -- ���ϸ��� �⺻Ű
		PRIMARY KEY (
			MILENO -- ���ϸ�����ȣ
		);

ALTER TABLE MILE
	MODIFY COLUMN MILENO INTEGER NOT NULL AUTO_INCREMENT COMMENT '���ϸ�����ȣ';

-- �ȷ���
CREATE TABLE FOLLOW (
	UNO   INTEGER NOT NULL COMMENT 'ȸ����ȣ', -- ȸ����ȣ
	TRNNO INTEGER NOT NULL COMMENT 'Ʈ���̳ʹ�ȣ' -- Ʈ���̳ʹ�ȣ
)
COMMENT '�ȷ���';

-- �ȷ���
ALTER TABLE FOLLOW
	ADD CONSTRAINT PK_FOLLOW -- �ȷ��� �⺻Ű
		PRIMARY KEY (
			UNO,   -- ȸ����ȣ
			TRNNO  -- Ʈ���̳ʹ�ȣ
		);

-- ���α׷�Ÿ�Ӷ������ƿ�
CREATE TABLE TML_LK (
	PNO  INTEGER NOT NULL COMMENT '���α׷���ȣ', -- ���α׷���ȣ
	UNO  INTEGER NOT NULL COMMENT 'ȸ����ȣ', -- ȸ����ȣ
	PONO INTEGER NOT NULL COMMENT '�Խñ� ��ȣ' -- �Խñ� ��ȣ
)
COMMENT '���α׷�Ÿ�Ӷ������ƿ�';

-- ���α׷�Ÿ�Ӷ������ƿ�
ALTER TABLE TML_LK
	ADD CONSTRAINT PK_TML_LK -- ���α׷�Ÿ�Ӷ������ƿ� �⺻Ű
		PRIMARY KEY (
			PNO,  -- ���α׷���ȣ
			UNO,  -- ȸ����ȣ
			PONO  -- �Խñ� ��ȣ
		);

-- �Խñ�
CREATE TABLE POST (
	PONO   INTEGER NOT NULL COMMENT '�Խñ� ��ȣ', -- �Խñ� ��ȣ
	POCONT TEXT    NOT NULL COMMENT '����', -- ����
	PODATE DATE    NOT NULL COMMENT '��¥' -- ��¥
)
COMMENT '�Խñ�';

-- �Խñ�
ALTER TABLE POST
	ADD CONSTRAINT PK_POST -- �Խñ� �⺻Ű
		PRIMARY KEY (
			PONO -- �Խñ� ��ȣ
		);

ALTER TABLE POST
	MODIFY COLUMN PONO INTEGER NOT NULL AUTO_INCREMENT COMMENT '�Խñ� ��ȣ';

-- ȸ��
ALTER TABLE MEMB
	ADD CONSTRAINT FK_USER_TO_MEMB -- ����� -> ȸ��
		FOREIGN KEY (
			UNO -- ȸ����ȣ
		)
		REFERENCES USER ( -- �����
			UNO -- ����ڹ�ȣ
		);

-- Ÿ�Ӷ���
ALTER TABLE TML
	ADD CONSTRAINT FK_PMEMB_TO_TML -- ���α׷������� -> Ÿ�Ӷ���
		FOREIGN KEY (
			PNO, -- ���α׷���ȣ
			UNO  -- ȸ����ȣ
		)
		REFERENCES PMEMB ( -- ���α׷�������
			PNO, -- ���α׷���ȣ
			UNO  -- ȸ����ȣ
		);

-- Ÿ�Ӷ���
ALTER TABLE TML
	ADD CONSTRAINT FK_POST_TO_TML -- �Խñ� -> Ÿ�Ӷ���
		FOREIGN KEY (
			TMLNO -- Ÿ�Ӷ��� ��ȣ
		)
		REFERENCES POST ( -- �Խñ�
			PONO -- �Խñ� ��ȣ
		);

-- ���α׷�
ALTER TABLE PROG
	ADD CONSTRAINT FK_TRN_TO_PROG -- Ʈ���̳� -> ���α׷�
		FOREIGN KEY (
			TRNNO -- Ʈ���̳ʹ�ȣ
		)
		REFERENCES TRN ( -- Ʈ���̳�
			TRNNO -- Ʈ���̳ʹ�ȣ
		);

-- ���α׷�
ALTER TABLE PROG
	ADD CONSTRAINT FK_CHAL_TO_PROG -- ç���� -> ���α׷�
		FOREIGN KEY (
			CNO -- ç������ȣ
		)
		REFERENCES CHAL ( -- ç����
			CHNO -- ç������ȣ
		);

-- ���α׷�
ALTER TABLE PROG
	ADD CONSTRAINT FK_PLAN_TO_PROG -- ���ȹ�� -> ���α׷�
		FOREIGN KEY (
			PLNO -- ���ȹ����ȣ
		)
		REFERENCES PLAN ( -- ���ȹ��
			PLNO -- ���ȹ����ȣ
		);

-- Ʈ���̳�
ALTER TABLE TRN
	ADD CONSTRAINT FK_USER_TO_TRN -- ����� -> Ʈ���̳�
		FOREIGN KEY (
			TRNNO -- Ʈ���̳ʹ�ȣ
		)
		REFERENCES USER ( -- �����
			UNO -- ����ڹ�ȣ
		);

-- ���α׷�������
ALTER TABLE PMEMB
	ADD CONSTRAINT FK_PROG_TO_PMEMB -- ���α׷� -> ���α׷�������
		FOREIGN KEY (
			PNO -- ���α׷���ȣ
		)
		REFERENCES PROG ( -- ���α׷�
			PNO -- ���α׷���ȣ
		);

-- ���α׷�������
ALTER TABLE PMEMB
	ADD CONSTRAINT FK_MEMB_TO_PMEMB -- ȸ�� -> ���α׷�������
		FOREIGN KEY (
			UNO -- ȸ����ȣ
		)
		REFERENCES MEMB ( -- ȸ��
			UNO -- ȸ����ȣ
		);

-- ȸ���ٵ�����
ALTER TABLE BINFO
	ADD CONSTRAINT FK_MEMB_TO_BINFO -- ȸ�� -> ȸ���ٵ�����
		FOREIGN KEY (
			UNO -- ȸ����ȣ
		)
		REFERENCES MEMB ( -- ȸ��
			UNO -- ȸ����ȣ
		);

-- �޽���
ALTER TABLE MSG
	ADD CONSTRAINT FK_MEMB_TO_MSG -- ȸ�� -> �޽���
		FOREIGN KEY (
			UNO -- ȸ����ȣ
		)
		REFERENCES MEMB ( -- ȸ��
			UNO -- ȸ����ȣ
		);

-- �޽���
ALTER TABLE MSG
	ADD CONSTRAINT FK_TRN_TO_MSG -- Ʈ���̳� -> �޽���
		FOREIGN KEY (
			TRNNO -- Ʈ���̳ʹ�ȣ
		)
		REFERENCES TRN ( -- Ʈ���̳�
			TRNNO -- Ʈ���̳ʹ�ȣ
		);

-- Ŀ�´�Ƽ-�Խù�
ALTER TABLE CMU
	ADD CONSTRAINT FK_USER_TO_CMU -- ����� -> Ŀ�´�Ƽ-�Խù�
		FOREIGN KEY (
			UNO -- ����ڹ�ȣ
		)
		REFERENCES USER ( -- �����
			UNO -- ����ڹ�ȣ
		);

-- Ŀ�´�Ƽ-�Խù�
ALTER TABLE CMU
	ADD CONSTRAINT FK_POST_TO_CMU -- �Խñ� -> Ŀ�´�Ƽ-�Խù�
		FOREIGN KEY (
			CMUNO -- Ŀ�´�Ƽ �۹�ȣ
		)
		REFERENCES POST ( -- �Խñ�
			PONO -- �Խñ� ��ȣ
		);

-- ���
ALTER TABLE CMT
	ADD CONSTRAINT FK_POST_TO_CMT -- �Խñ� -> ���
		FOREIGN KEY (
			CMTNO -- ��� ��ȣ
		)
		REFERENCES POST ( -- �Խñ�
			PONO -- �Խñ� ��ȣ
		);

-- ���
ALTER TABLE CMT
	ADD CONSTRAINT FK_TML_TO_CMT -- Ÿ�Ӷ��� -> ���
		FOREIGN KEY (
			TMLNO -- Ÿ�Ӷ��� ��ȣ
		)
		REFERENCES TML ( -- Ÿ�Ӷ���
			TMLNO -- Ÿ�Ӷ��� ��ȣ
		);

-- �����
ALTER TABLE DIARY
	ADD CONSTRAINT FK_PLAN_TO_DIARY -- ���ȹ�� -> �����
		FOREIGN KEY (
			PLNO -- ���ȹ����ȣ
		)
		REFERENCES PLAN ( -- ���ȹ��
			PLNO -- ���ȹ����ȣ
		);

-- �����
ALTER TABLE DIARY
	ADD CONSTRAINT FK_PMEMB_TO_DIARY -- ���α׷������� -> �����
		FOREIGN KEY (
			PNO, -- ���α׷���ȣ
			UNO  -- ȸ����ȣ
		)
		REFERENCES PMEMB ( -- ���α׷�������
			PNO, -- ���α׷���ȣ
			UNO  -- ȸ����ȣ
		);

-- ���α׷��̵��
ALTER TABLE PMED
	ADD CONSTRAINT FK_PROG_TO_PMED -- ���α׷� -> ���α׷��̵��
		FOREIGN KEY (
			PNO -- ���α׷���ȣ
		)
		REFERENCES PROG ( -- ���α׷�
			PNO -- ���α׷���ȣ
		);

-- �Խù��̵��
ALTER TABLE CMED
	ADD CONSTRAINT FK_CMU_TO_CMED -- Ŀ�´�Ƽ-�Խù� -> �Խù��̵��
		FOREIGN KEY (
			CMUNO -- Ŀ�´�Ƽ �۹�ȣ
		)
		REFERENCES CMU ( -- Ŀ�´�Ƽ-�Խù�
			CMUNO -- Ŀ�´�Ƽ �۹�ȣ
		);

-- ���ϸ���
ALTER TABLE MILE
	ADD CONSTRAINT FK_MEMB_TO_MILE -- ȸ�� -> ���ϸ���
		FOREIGN KEY (
			UNO -- ȸ����ȣ
		)
		REFERENCES MEMB ( -- ȸ��
			UNO -- ȸ����ȣ
		);

-- �ȷ���
ALTER TABLE FOLLOW
	ADD CONSTRAINT FK_MEMB_TO_FOLLOW -- ȸ�� -> �ȷ���
		FOREIGN KEY (
			UNO -- ȸ����ȣ
		)
		REFERENCES MEMB ( -- ȸ��
			UNO -- ȸ����ȣ
		);

-- �ȷ���
ALTER TABLE FOLLOW
	ADD CONSTRAINT FK_TRN_TO_FOLLOW -- Ʈ���̳� -> �ȷ���
		FOREIGN KEY (
			TRNNO -- Ʈ���̳ʹ�ȣ
		)
		REFERENCES TRN ( -- Ʈ���̳�
			TRNNO -- Ʈ���̳ʹ�ȣ
		);

-- ���α׷�Ÿ�Ӷ������ƿ�
ALTER TABLE TML_LK
	ADD CONSTRAINT FK_PMEMB_TO_TML_LK -- ���α׷������� -> ���α׷�Ÿ�Ӷ������ƿ�
		FOREIGN KEY (
			PNO, -- ���α׷���ȣ
			UNO  -- ȸ����ȣ
		)
		REFERENCES PMEMB ( -- ���α׷�������
			PNO, -- ���α׷���ȣ
			UNO  -- ȸ����ȣ
		);

-- ���α׷�Ÿ�Ӷ������ƿ�
ALTER TABLE TML_LK
	ADD CONSTRAINT FK_POST_TO_TML_LK -- �Խñ� -> ���α׷�Ÿ�Ӷ������ƿ�
		FOREIGN KEY (
			PONO -- �Խñ� ��ȣ
		)
		REFERENCES POST ( -- �Խñ�
			PONO -- �Խñ� ��ȣ
		);