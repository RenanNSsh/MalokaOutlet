using MalokaOutlet.Domain.Contracts;
using MalokaOutlet.Domain.Entities;
using MalokaOutlet.Repository.Context;

namespace MalokaOutlet.Repository.Repositories {
    public class ProductRepository : BaseRepository<Product>, IProductRepository {
        public ProductRepository(MalokaOutletContext malokaOutletContext) : base(malokaOutletContext) {
        }
    }
}
