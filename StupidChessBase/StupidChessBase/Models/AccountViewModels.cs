﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace StupidChessBase.Models
{
    public class ExternalLoginConfirmationViewModel
    {
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }
    }
}
