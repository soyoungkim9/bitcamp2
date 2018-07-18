package challenge.domain;

import java.io.Serializable;
import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class BodyInfo implements Serializable {
    private static final long serialVersionUID = 1L;

   
    private int bno; // 회원번호
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date mdate; // 측정일
    private Double weight; // 몸무게
    private Double muscle; // 근력량
    private Double fat;
    public int getBno() {
        return bno;
    }
    public void setBno(int bno) {
        this.bno = bno;
    }
    public Date getMdate() {
        return mdate;
    }
    public void setMdate(Date mdate) {
        this.mdate = mdate;
    }
    public Double getWeight() {
        return weight;
    }
    public void setWeight(Double weight) {
        this.weight = weight;
    }
    public Double getMuscle() {
        return muscle;
    }
    public void setMuscle(Double muscle) {
        this.muscle = muscle;
    }
    public Double getFat() {
        return fat;
    }
    public void setFat(Double fat) {
        this.fat = fat;
    }
   




   


   
}
