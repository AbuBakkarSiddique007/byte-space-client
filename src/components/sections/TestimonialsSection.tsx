import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Container } from "@/components/layout/Container";
import { testimonials } from "@/data";
import { cn } from "@/lib/utils";

const avatarTones = [
  "bg-primary-blue text-white",
  "bg-accent-lime text-dark-heading",
  "bg-dark-heading text-white",
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export function TestimonialsSection() {
  return (
    <section className="bg-feature-wash relative w-full overflow-hidden py-20 sm:py-28">
      <Container>
        <div className="relative grid gap-6 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-3xl font-bold leading-[1.2] tracking-tight text-dark-heading sm:text-4xl lg:text-[42px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-sm leading-[1.7] text-muted-body sm:text-base lg:self-end">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.id}
              className="flex flex-col items-start gap-5 rounded-3xl border border-border-subtle bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Avatar className="size-16">
                {testimonial.avatarUrl ? (
                  <AvatarImage
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    width={200}
                    height={200}
                  />
                ) : null}
                <AvatarFallback
                  className={cn(
                    "text-lg font-bold",
                    avatarTones[index % avatarTones.length],
                  )}
                >
                  {getInitials(testimonial.name)}
                </AvatarFallback>
              </Avatar>

              <figcaption className="flex flex-col items-start gap-1">
                <span className="text-base font-bold text-dark-heading">
                  {testimonial.name}
                </span>
                <span className="text-sm font-medium text-primary-blue">
                  {testimonial.role}
                </span>
              </figcaption>

              <blockquote className="text-sm leading-[1.7] text-muted-body">
                {testimonial.quote}
              </blockquote>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}