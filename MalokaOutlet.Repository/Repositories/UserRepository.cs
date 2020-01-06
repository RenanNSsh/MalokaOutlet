using MalokaOutlet.Domain.Contracts;
using MalokaOutlet.Domain.Entities;
using MalokaOutlet.Repository.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace MalokaOutlet.Repository.Repositories {
    public class UserRepository : BaseRepository<User>, IUserRepository {
        public UserRepository(MalokaOutletContext malokaOutletContext) : base(malokaOutletContext) {
        }
    }
}
