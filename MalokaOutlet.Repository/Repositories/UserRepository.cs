using MalokaOutlet.Domain.Contracts;
using MalokaOutlet.Domain.Entities;
using MalokaOutlet.Repository.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MalokaOutlet.Repository.Repositories {
    public class UserRepository : BaseRepository<User>, IUserRepository {
        public UserRepository(MalokaOutletContext malokaOutletContext) : base(malokaOutletContext) {
        }

        public User Get(string email, string password) {
            return MalokaOutletContext.Users.FirstOrDefault(u => u.Email == email && u.Password == password);
        }

        public User Get(string email) {
            return MalokaOutletContext.Users.FirstOrDefault(u => u.Email == email);
        }
    }
}
