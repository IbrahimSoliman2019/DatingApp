using System;

namespace Api.Extentions
{
    public static class DateTimeExtentions
    {
        public static int CalculateAge(this DateTime dob){
            var today = DateTime.Today;
            var age = today.Year - dob.Year;
            if(dob>today.AddYears(-age)) age--;
            return age ;
        }
    }
}