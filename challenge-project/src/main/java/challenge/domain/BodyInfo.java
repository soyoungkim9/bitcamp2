package challenge.domain;

import java.io.Serializable;
import java.sql.Date;

public class BodyInfo extends Member implements Serializable {
    private static final long serialVersionUID = 1L;

   
    private int userNo; // 회원번호
    private Date bDate; // 측정일
    private Double weight; // 몸무게
    private Double muscle; // 근력량
    private Double fat;
   

    public int getUserNo() {
        return userNo;
    }


    public void setUserNo(int userNo) {
        this.userNo = userNo;
    }


    public Date getbDate() {
        return bDate;
    }


    public void setbDate(Date bDate) {
        this.bDate = bDate;
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
