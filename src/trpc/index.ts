import { router, publicProcedure } from './trpc';

// create the router
export const appRouter = router({
	getMessage: publicProcedure.query(() => {
		return {
			message: 'Hello from tRPC',
		};
	}),
});

// export router type definition
export type AppRouter = typeof appRouter;
