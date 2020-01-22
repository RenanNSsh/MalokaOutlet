using MalokaOutlet.Domain.Contracts;
using MalokaOutlet.Domain.Entities;
using MalokaOutlet.Repository.Context;
using System.Linq;

namespace MalokaOutlet.Repository.Repositories {
    public class ProductRepository : BaseRepository<Product>, IProductRepository {
        public ProductRepository(MalokaOutletContext malokaOutletContext) : base(malokaOutletContext) {
        }

        public void Remove(int id) {
            Remove(MalokaOutletContext.Products.FirstOrDefault(product => product.Id == id));
        }
    }
}
