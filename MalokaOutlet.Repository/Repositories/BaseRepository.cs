using MalokaOutlet.Domain.Contracts;
using MalokaOutlet.Repository.Context;
using System.Collections.Generic;
using System.Linq;

namespace MalokaOutlet.Repository.Repositories {
    public abstract class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class {

        protected readonly MalokaOutletContext MalokaOutletContext;
        public BaseRepository(MalokaOutletContext malokaOutletContext) {
            MalokaOutletContext = malokaOutletContext;
        }

        public void Add(TEntity entity) {
            MalokaOutletContext.Set<TEntity>().Add(entity);
            MalokaOutletContext.SaveChanges();
        }

        public void Dispose() {
            MalokaOutletContext.Dispose();
        }

        public IEnumerable<TEntity> GetAll() {
            return MalokaOutletContext.Set<TEntity>().ToList();
        }

        public TEntity GetById(int id) {
            return MalokaOutletContext.Set<TEntity>().Find(id);
        }

        public void Remove(TEntity entity) {
            MalokaOutletContext.Remove(entity);
            MalokaOutletContext.SaveChanges();
        }

        public void Update(TEntity entity) {
            MalokaOutletContext.Set<TEntity>().Update(entity);
            MalokaOutletContext.SaveChanges();
        }
    }
}
