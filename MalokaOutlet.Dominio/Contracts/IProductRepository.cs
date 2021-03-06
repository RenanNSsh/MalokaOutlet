﻿using MalokaOutlet.Domain.Entities;

namespace MalokaOutlet.Domain.Contracts {
    public interface IProductRepository: IBaseRepository<Product> {

        void Remove(int id);
    }
}
