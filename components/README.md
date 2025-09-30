# Masonry Grid Component

A responsive Pinterest-style Masonry grid layout built with React and Tailwind CSS.

## Features

- **Responsive Design**: 
  - 1 column on mobile
  - 2-3 columns on tablets
  - 4-6 columns on desktops
  
- **Uniform Card Sizes**: All cards maintain a 9:16 aspect ratio like Instagram reels

- **Smooth Animations**: Hover effects and transitions for better user experience

- **Dark Mode Support**: Fully compatible with dark mode themes

- **Performance Optimized**: Lazy loading for images and efficient rendering

## Components

### MasonryGrid (`masonry-grid.tsx`)

The main grid container that arranges cards in a masonry layout.

**Props**: None (uses internal sample data for demo)

**Implementation Details**:
- Uses CSS Grid with `grid-auto-flow: dense` for optimal card placement
- Responsive column count using `repeat(auto-fill, minmax(200px, 1fr))`
- All cards maintain 9:16 aspect ratio using `aspect-ratio: 9/16`

### Card (`card.tsx`)

Reusable card component that can display:
- Images only
- Text only
- Mixed content (image + text)

**Props**:
- `id`: Unique identifier
- `type`: "image" | "text" | "mixed"
- `src`: Image source (optional)
- `title`: Card title (optional)
- `description`: Card description (optional)
- `width`: Width multiplier (1-2)
- `height`: Height multiplier (1-2)

All cards maintain a consistent 9:16 aspect ratio regardless of content type.

## Usage

```jsx
import MasonryGrid from "@/components/masonry-grid"

function MyPage() {
  return (
    <div>
      <h1>My Masonry Grid</h1>
      <MasonryGrid />
    </div>
  )
}
```

## Customization

### Card Sizes
All cards now maintain a consistent 9:16 aspect ratio (like Instagram reels) for a uniform appearance.

### Styling
All components use Tailwind CSS classes for styling. You can customize the appearance by modifying the classes directly.

## Responsive Behavior

The grid automatically adjusts based on screen size:
- **Large screens** (≥ 1024px): 4-6 columns
- **Medium screens** (768px - 1023px): 2-3 columns
- **Small screens** (< 768px): 1 column

All cards maintain their 9:16 aspect ratio at all screen sizes.

## Performance Features

- **Lazy Loading**: Images load only when they come into view
- **Skeleton Loading**: Placeholder shown while images are loading
- **Optimized Rendering**: Efficient DOM updates

## Demo

A demo page is available at `/masonry-demo` showcasing the component with sample data.