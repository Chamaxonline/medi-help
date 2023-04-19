using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.ViewModels.Validator
{
    public class PatientValidator : AbstractValidator<PatientViewModel>
    {
        public PatientValidator()
        {
            RuleFor(x => x.Phone).NotNull().WithMessage("Please Enter Phone Number");
            RuleFor(x => x.Phone).NotEmpty().Matches(@"^[0-9]+$").WithMessage("Phone number must contain only numeric characters.");
        }
    }
}
