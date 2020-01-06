using MalokaOutlet.Domain.Contracts;
using MalokaOutlet.Domain.Entities;
using MalokaOutlet.Repository.Context;

namespace MalokaOutlet.Repository.Repositories {
    public class OrderRepository : BaseRepository<Order>, IOrderRepository {
        public OrderRepository(MalokaOutletContext malokaOutletContext) : base(malokaOutletContext) {
        }
    }
}
