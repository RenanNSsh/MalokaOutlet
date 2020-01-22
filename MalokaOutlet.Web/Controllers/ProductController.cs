using MalokaOutlet.Domain.Contracts;
using MalokaOutlet.Domain.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Linq;

namespace MalokaOutlet.Web.Controllers {

    [ApiController]
    [Route("api/[controller]")]
    public class ProductController: Controller {

        private IHttpContextAccessor httpContextAccessor;
        private readonly IProductRepository productRepository;
        private IHostingEnvironment hostingEnvironment;
        public ProductController(IProductRepository productRepository, IHttpContextAccessor httpContextAccessor, IHostingEnvironment hostingEnvironment) {
            this.productRepository = productRepository;
            this.httpContextAccessor = httpContextAccessor;
            this.hostingEnvironment = hostingEnvironment;
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
                product.Validate();
                if (!product.IsValidy) {
                    return BadRequest(product.GetValidationMessages());
                }
                productRepository.Add(product);
                return Created("api/product", product);
            }catch(Exception exception) {
                return BadRequest(exception.ToString());
            }
        }

        [HttpPost("picture")]
        public IActionResult UpdatePicture() {
            try {
                var pictureFile = this.httpContextAccessor
                                   .HttpContext
                                   .Request
                                   .Form
                                   .Files["picture"];
                string newPictureName = GeneratePictureName(pictureFile); 
                var picturePath = hostingEnvironment.WebRootPath + "\\pictures\\";
                var fullName = picturePath + newPictureName;

                using (var fileStream = new FileStream(fullName, FileMode.Create)) {
                    pictureFile.CopyTo(fileStream);
                }

                return Json(newPictureName);
            }
            catch (Exception exception) {
                return BadRequest(exception.ToString());
            }
        }

        [HttpDelete("{id:int}")]
        public IActionResult Remove(int id) {
            try {
                productRepository.Remove(id);
                return Json(productRepository.GetAll());
            }catch(Exception exception) {
                return BadRequest(exception.ToString());
            }
        }

        [HttpPut]
        public IActionResult Update([FromBody] Product product) {
            try {
                productRepository.Update(product);
                return Ok(product);
            }catch(Exception exception){
                return BadRequest(exception.ToString());
            }
        }

        private static string GeneratePictureName(IFormFile pictureFile) {
            var pictureName = pictureFile.FileName;
            var extension = pictureName.Split(".").Last();
            var minifiedNameArray = Path.GetFileNameWithoutExtension(pictureName).Take(10).ToArray();
            var newPictureName = new string(minifiedNameArray).Replace(" ", "-");
            newPictureName = $"{newPictureName}_{DateTime.Now.Year}{DateTime.Now.Month}{DateTime.Now.Day}{DateTime.Now.Hour}{DateTime.Now.Minute}{DateTime.Now.Second}";
            return newPictureName + "." + extension;
        }
    }
}
