using MalokaOutlet.Domain.Contracts;
using MalokaOutlet.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using System;

namespace MalokaOutlet.Web.Controllers {
    [Route("api/[controller]")]
    public class OrderController: Controller {
        private readonly IOrderRepository orderRepository;
        public OrderController(IOrderRepository orderRepository) {
            this.orderRepository = orderRepository;
        }

        [HttpPost]
        public IActionResult Purchase([FromBody] Order order) {
            try {
                orderRepository.Add(order);
                return Ok(order.Id);
            }catch(Exception exception) {
                return BadRequest(exception.ToString());
            }
        }
    }
}
