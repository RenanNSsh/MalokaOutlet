using MalokaOutlet.Domain.Contracts;
using MalokaOutlet.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using System;

namespace MalokaOutlet.Web.Controllers {

    [ApiController]
    [Route("api/[controller]")]
    public class ProductController: ControllerBase {

        private readonly IProductRepository productRepository;
        public ProductController(IProductRepository productRepository) {
            this.productRepository = productRepository;
        }

        [HttpGet]
        public IActionResult GetAll() {
            try {
                return Ok(productRepository.GetAll());
            }
            catch(Exception exception) {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Add([FromBody] Product product) {
            try {
                productRepository.Add(product);
                return Created("api/product", product);
            }catch(Exception exception) {
                return BadRequest(exception.ToString());
            }
        }

    }
}
