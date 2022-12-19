package com.greencommute.usersjobs.entity;


import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "user_job")
@IdClass(UserJobComId.class)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserJob implements Serializable {

    @Id
    @Column(name = "id_user")
    private int userId;

    @Id
    @Column(name = "id_job")
    private int jobId;

    @Column(name = "is_saved")
    private boolean isSaved;

    @Column(name = "is_applied")
    private boolean isApplied;
}
