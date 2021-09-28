using System.Linq;
using Api.DTOs;
using Api.Entities;
using Api.Extentions;
using AutoMapper;

namespace Api.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser,MemberDto>()
            .ForMember(dist => dist.Photourl,o => o.MapFrom(s=>s.Photos.FirstOrDefault(x=>x.IsMain).Url))
            .ForMember(dist => dist.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<Photo,PhotoDto>();
        }
    }
}