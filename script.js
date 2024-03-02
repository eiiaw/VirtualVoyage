import pygame
import random

# Initialize Pygame
pygame.init()

# Screen dimensions
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600

# Colors
WHITE = (255, 255, 255)
BLUE = (0, 0, 255)

# Create the screen
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("VirtualVoyage")

# Main loop
running = True
clock = pygame.time.Clock()

while running:
    screen.fill(WHITE)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    for _ in range(100):
        x = random.randrange(0, SCREEN_WIDTH)
        y = random.randrange(0, SCREEN_HEIGHT)
        pygame.draw.circle(screen, BLUE, (x, y), 3)

    pygame.display.flip()
    clock.tick(30)

pygame.quit()
