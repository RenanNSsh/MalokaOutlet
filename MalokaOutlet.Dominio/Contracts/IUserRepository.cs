using MalokaOutlet.Domain.Entities;

namespace MalokaOutlet.Domain.Contracts {
    public interface IUserRepository : IBaseRepository<User> {

        User Get(string email, string password);
        User Get(string email);
    }
}
