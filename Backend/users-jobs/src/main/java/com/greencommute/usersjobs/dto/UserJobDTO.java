package com.greencommute.usersjobs.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserJobDTO {
    private int userId;
    private int jobId;
    private boolean isSaved;
    private boolean isApplied;
}
